class TestsController < ApplicationController
  include ApplicationHelper
  
  def new
    @test = Test.new
  end
  
  def create
    @test = Test.new(params[:test])
    @test.uid = Test.generate_uid
    if @test.save
      redirect_to "/#{@test.uid}"
    else
      render :new
    end
  end
  
  def show
    @test = Test.find_by_uid(params[:uid])
    @test.html = replace_placeholders(@test.html)
    @test.css = replace_placeholders(@test.css)
    @test.js = replace_placeholders(@test.js)
  end
  
  def html
    @test = Test.find_by_uid(params[:uid])
  end
  
  def update_html
    @test = Test.find_by_uid(params[:uid])
    html = params[:html].gsub(/\$PERIOD\$/, '.')
    @test.update_attribute(:html, html)
    @test.save
    render nothing: true
  end
  
  def css
    @test = Test.find_by_uid(params[:uid])
  end
  
  def update_css
    @test = Test.find_by_uid(params[:uid])
    css = params[:css].gsub(/\$PERIOD\$/, '.')
    @test.update_attribute(:css, css)
    @test.save
    render nothing: true
  end
  
  def js
    @test = Test.find_by_uid(params[:uid])
  end
  
  def update_js
    @test = Test.find_by_uid(params[:uid])
    css = params[:js].gsub(/\$PERIOD\$/, '.')
    @test.update_attribute(:js, css)
    @test.save
    render nothing: true
  end
end