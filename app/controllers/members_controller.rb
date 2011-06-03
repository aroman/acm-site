class MembersController < ApplicationController
  before_filter :login_required, :except => [:rsvp, :update, :edit]

  def index
    @members = Member.all
  end

  def show
    @member = Member.find(params[:id])
  end

  def new
    @member = Member.new
    authorize! :new, @member
  end

  def create
    @member = Member.new(params[:member])
      authorize! :manage_member, @member
    if @member.save
      redirect_to @member, :notice => "Successfully created member."
    else
      render :action => 'new'
    end
  end

  def edit
    @member = Member.find(params[:id])
    authorize! :manage_member, @member
  end

  def update
    @member = Member.find(params[:id])
    authorize! :manage_member, @member
    if @member.update_attributes(params[:member])
      redirect_to @member, :notice  => "Successfully updated member."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @member = Member.find(params[:id])
    authorize! :manage_member, @member
    @member.destroy
    redirect_to members_url, :notice => "Successfully destroyed member."
  end
end
