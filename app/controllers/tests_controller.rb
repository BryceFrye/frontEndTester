class TestsController < ApplicationController
  def new
    @test = Test.new
  end
  
  def create
    @test = Test.new(params[:test])
    @test.uid = Test.generate_uid
    if @test.save
      cookies[:controls_state] = 'show'
      cookies[:recent_tests] = '' unless cookies[:recent_tests]
      cookies[:recent_tests] = cookies[:recent_tests] + ",#{@test.uid} - Created #{@test.created_at}"
      redirect_to "/#{@test.uid}"
    else
      render :new
    end
  end
  
  def show
    @test = Test.find_by_uid(params[:uid])
  end
  
  def html
    @test = Test.find_by_uid(params[:uid])
  end
  
  def update_html
    @test = Test.find_by_uid(params[:uid])
    @test.update_attributes(params[:test])
    if @test.save
      redirect_to :html
    else
      # Add a flash error here
      redirect_to :html
    end
  end
  
  def css
    @test = Test.find_by_uid(params[:uid])
  end
  
  def update_css
    @test = Test.find_by_uid(params[:uid])
    @test.update_attributes(params[:test])
    if @test.save
      redirect_to :css
    else
      # Add a flash error here
      redirect_to :css
    end
  end
  
  def js
    @test = Test.find_by_uid(params[:uid])
  end
  
  def update_js
    @test = Test.find_by_uid(params[:uid])
    @test.update_attributes(params[:test])
    if @test.save
      redirect_to :js
    else
      # Add a flash error here
      redirect_to :js
    end
  end
  
  def toggle_controls
    if params[:controls_state] == 'show'
      cookies[:controls_state] = 'show'
    elsif params[:controls_state] == 'hide'
      cookies[:controls_state] = 'hide'
    end
    render nothing: true
  end
end