Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      # task
      resources :tasks
    end
  end

  scope module: :gui do
    get '(/*path)', to: 'home#show'
  end
end
