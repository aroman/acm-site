class HomeController < ApplicationController
  def index
    @title = "Home"
  end

  def about
   @title = "We R Who We R"
  end

  def we
    @title = "What We Do"
  end

  def join
    @title = "Eat Food"
  end

  def sponsor
    @title = "Give Us Money"
  end
end

