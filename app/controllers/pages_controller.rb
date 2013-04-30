class PagesController < ApplicationController
  def home
    @test = Test.new
  end
end
