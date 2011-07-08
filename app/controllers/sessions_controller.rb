class SessionsController < ApplicationController
  def new
  end

  def create
    member = Member.authenticate(params[:login], params[:password])
    if member
      session[:member_id] = member.id
      redirect_to_target_or_default root_url, :notice => "Logged in successfully."
    else
      flash.now[:alert] = "Invalid login or password."
      render :action => 'new'
    end
  end

  def destroy
    session[:member_id] = nil
    redirect_to root_url, :notice => "You have been logged out."
  end
end
