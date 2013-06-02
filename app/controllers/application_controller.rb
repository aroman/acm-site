class ApplicationController < ActionController::Base
  include ControllerAuthentication
  protect_from_forgery

  def current_ability
    @current_ability ||= Ability.new(current_member)
  end

  rescue_from CanCan::AccessDenied do |exception|
    flash[:error] = "You do not have the necessary ninja skills to access that page. Train harder, maybe."
    redirect_to root_url
  end

end
