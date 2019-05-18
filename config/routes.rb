Rails.application.routes.draw do
  shallow do
    scope module: :gui do
      # ルート
      root 'dashboard#show'

      # todo
      resources :todos
    end
  end
end
