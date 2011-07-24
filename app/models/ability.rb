class Ability
  include CanCan::Ability

  def initialize(member)

    member ||= Member.new
    
    if member.role? :admin
      can :manage, :all
    elsif member.role? :user  #this is so a user can edit own details
      can :manage, Member, :id => member.id
    end

  end
end
