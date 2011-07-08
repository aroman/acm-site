require 'test_helper'

class MemberTest < ActiveSupport::TestCase
  def new_member(attributes = {})
    attributes[:username] ||= 'foo'
    attributes[:email] ||= 'foo@example.com'
    attributes[:password] ||= 'abc123'
    attributes[:password_confirmation] ||= attributes[:password]
    member = Member.new(attributes)
    member.valid? # run validations
    member
  end

  def setup
    Member.delete_all
  end

  def test_valid
    assert new_member.valid?
  end

  def test_require_username
    assert_equal ["can't be blank"], new_member(:username => '').errors[:username]
  end

  def test_require_password
    assert_equal ["can't be blank"], new_member(:password => '').errors[:password]
  end

  def test_require_well_formed_email
    assert_equal ["is invalid"], new_member(:email => 'foo@bar@example.com').errors[:email]
  end

  def test_validate_uniqueness_of_email
    new_member(:email => 'bar@example.com').save!
    assert_equal ["has already been taken"], new_member(:email => 'bar@example.com').errors[:email]
  end

  def test_validate_uniqueness_of_username
    new_member(:username => 'uniquename').save!
    assert_equal ["has already been taken"], new_member(:username => 'uniquename').errors[:username]
  end

  def test_validate_odd_characters_in_username
    assert_equal ["should only contain letters, numbers, or .-_@"], new_member(:username => 'odd ^&(@)').errors[:username]
  end

  def test_validate_password_length
    assert_equal ["is too short (minimum is 4 characters)"], new_member(:password => 'bad').errors[:password]
  end

  def test_require_matching_password_confirmation
    assert_equal ["doesn't match confirmation"], new_member(:password_confirmation => 'nonmatching').errors[:password]
  end

  def test_generate_password_hash_and_salt_on_create
    member = new_member
    member.save!
    assert member.password_hash
    assert member.password_salt
  end

  def test_authenticate_by_username
    Member.delete_all
    member = new_member(:username => 'foobar', :password => 'secret')
    member.save!
    assert_equal member, Member.authenticate('foobar', 'secret')
  end

  def test_authenticate_by_email
    Member.delete_all
    member = new_member(:email => 'foo@bar.com', :password => 'secret')
    member.save!
    assert_equal member, Member.authenticate('foo@bar.com', 'secret')
  end

  def test_authenticate_bad_username
    assert_nil Member.authenticate('nonexisting', 'secret')
  end

  def test_authenticate_bad_password
    Member.delete_all
    new_member(:username => 'foobar', :password => 'secret').save!
    assert_nil Member.authenticate('foobar', 'badpassword')
  end
end
