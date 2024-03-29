class Member < ActiveRecord::Base
  # new columns need to be added here to be writable through mass assignment
  attr_accessible :email, :password, :password_confirmation, :first_name, :last_name, :andrew_id, :major, :officer_position, :committe, :phone, :shirt_size, :year, :role

  ROLES = [['Administrator', :admin],['User', :user]]


  attr_accessor :password
  before_save :prepare_password

  validates_presence_of :andrew_id
  validates_uniqueness_of :andrew_id, :email, :allow_blank => true
  validates_format_of :email, :with => /^[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}$/i
  validates_presence_of :password, :on => :create
  validates_confirmation_of :password
  validates_length_of :password, :minimum => 4, :allow_blank => true

  #ability
  def role?(authorized_role)
    return false if role.nil?
    role.to_sym == authorized_role
  end

  # login can be either username or email address
  def self.authenticate(login, pass)
    member = find_by_andrew_id(login)
    return member if member && member.password_hash == member.encrypt_password(pass)
  end

  def encrypt_password(pass)
    BCrypt::Engine.hash_secret(pass, password_salt)
  end

  private

  def prepare_password
    unless password.blank?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = encrypt_password(password)
    end
  end
end
