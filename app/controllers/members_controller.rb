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
      #session[:member_id] = @member.id
      redirect_to root_url, :notice => "Account Created."
    else
      render :action => 'new'
    end
  end

  def edit
    @member = Member.find(params[:id])
  end

  def update
    @member = Member.find(params[:id])
    if @member.update_attributes(params[:member])
      redirect_to root_url, :notice => "The profile has been updated."
    else
      render :action => 'edit'
    end
  end
end
