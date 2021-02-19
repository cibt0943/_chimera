Rails.application.routes.draw do
  scope module: :gui do
    # ルート
    root 'dashboard#show'

    # task
    resources :tasks
  end

  namespace :api, format: 'json' do
    namespace :v1 do
      # task
      resources :tasks
    end
  end
end
