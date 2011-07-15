class Ability
  include CanCan::Ability

  def initialize(member)

    member ||= Member.new
    
    if member.role? :admin
      can :manage, :all
    elsif member.role? :user  #this is so a user can edit own details
      can :manage, Member do |member|
        member.try == member
      end
    else
      can :read, :all
    end

  end
end
