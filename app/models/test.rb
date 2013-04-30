class Test < ActiveRecord::Base
  attr_accessible :uid, :html, :css, :js
  
  after_save do |test|
    if test.is_new
      test.html = <<-eos
<div id='main_container'>
  <h1>Hello, World!</h1>
  <p>To get started, open up the HTML, CSS, and JavaScript files located in the bottom control panel.</p>
  <p>Anything you type in the HTML file will appear within the body tag of this display page and the CSS and JavaScript files are automatically included, so theres no need to type out any boilerplate code.  jQuery version 1.9.1 is automatically included as well.</p>
</div>
eos
      test.css = <<-eos
#main_container{
  margin: 40px;
  font-size: 24px;
}

h1{
  text-align: center;
}
eos
      test.is_new = false
      test.save
    end
  end
  
  validates :uid, presence: true, uniqueness: true, length: { is: 7 }
  
  UID_CHARS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
  
  def self.generate_uid
    uid = ''
    7.times { uid += UID_CHARS.sample }
    uid
  end
end
