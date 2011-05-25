Acm::Application.routes.draw do
  resources :apps

  match 'user/edit' => 'users#edit', :as => :edit_current_user

 # removed so users cannot signup to the site
 # match 'signup' => 'users#new', :as => :signup

  match 'logout' => 'sessions#destroy', :as => :logout

  match 'login' => 'sessions#new', :as => :login

  resources :sessions

  resources :users

  resources :members

  resources :articles

  root :to => 'home#index'

  match 'home' => 'home#index', :as => :home
  match 'about' => 'home#about', :as => :about
  match 'contact' => 'home#contact', :as => :contact
  match 'board' => 'home#board', :as => :board
  match 'partners' => 'home#partners', :as => :partners
end
