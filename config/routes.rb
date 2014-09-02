Acm::Application.routes.draw do
  match 'member/edit' => 'members#edit', :as => :edit_current_member

  match 'signup' => 'members#new', :as => :signup

  match 'logout' => 'sessions#destroy', :as => :logout

  match 'login' => 'sessions#new', :as => :login

  resources :sessions

  resources :members

 # removed so users cannot signup to the site
 # match 'signup' => 'users#new', :as => :signup

  resources :articles

  root :to => 'home#index'

# new tabs as per eric wu
  match 'home' => 'home#index', :as => :home
  match 'about' => 'home#about', :as => :about
  match 'we' => 'home#we', :as => :we
  match 'join' => 'home#join', :as => :join
  match 'sponsors' => 'home#sponsors', :as => :sponsors
  match 'shirts' => 'home#shirt', :as => :shirts
  match 'subscribe' => 'home#subscribe', :as => :subscribe

#  match 'contact' => 'home#contact', :as => :contact
#  match 'board' => 'home#board', :as => :board
#  match 'partners' => 'home#partners', :as => :partners
#  match 'apps' => 'home#apps', :as => :apps
end
