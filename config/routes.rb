Acm::Application.routes.draw do
  resources :members

  resources :articles

  root :to => 'home#index'

  match 'home' => 'home#index', :as => :home
  match 'about' => 'home#about', :as => :about
  match 'contact' => 'home#contact', :as => :contact



end
