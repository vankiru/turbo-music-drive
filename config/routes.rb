Rails.application.routes.draw do
  get 'inertia-example', to: 'inertia_example#index'
  resources :albums, only: [:show], export: true
  resources :artists, only: [:show], export: true do
    resource :analytics, only: [:show], module: :artists
  end
  resources :tracks, only: [], export: true do
    member do
      post :play
    end
  end

  root "library#index"
end
