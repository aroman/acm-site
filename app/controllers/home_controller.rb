class HomeController < ApplicationController
  def index
    @title = "Home"
  end

  def about
   @title = "About"
  end

  def we
    @title = "Activities"
  end

  def join
    @title = "Join"
  end

  def sponsors
    @title = "Sponsors"
  end

end

