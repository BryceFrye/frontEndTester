class Test < ActiveRecord::Base
  attr_accessible :uid, :html, :css, :js
  
  validates :uid, presence: true, uniqueness: true, length: { is: 7 }
  
  UID_CHARS = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
  
  def self.generate_uid
    uid = ''
    7.times { uid += UID_CHARS.sample }
    uid
  end
end
