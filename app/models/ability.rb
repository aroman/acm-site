class Ability
  include CanCan::Ability

  def initialize(member)

    member ||= Member.new
    
    if member.role? :admin
      can :manage, :all
    else
      can :read, :all
    end

  end
end
