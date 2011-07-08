class MembersController < ApplicationController
 
  authorize_resource
  before_filter :login_required, :except => [:new, :create]
  def index
    @members = Member.all
  end

  def new
    @member = Member.new
  end

  def create
    @member = Member.new(params[:member])
    if @member.save
      session[:member_id] = @member.id
      redirect_to root_url, :notice => "Thank you for signing up! You are now logged in."
    else
      render :action => 'new'
    end
  end

  def edit
    @member = current_member
  end

  def update
    @member = current_member
    if @member.update_attributes(params[:member])
      redirect_to root_url, :notice => "Your profile has been updated."
    else
      render :action => 'edit'
    end
  end
end
