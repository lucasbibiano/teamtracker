Rails.application.routes.draw do
  get 'login/new'
  get 'login', to: 'login#create'

  root to: 'home#styleguide'

  get 'styleguide/select_org' => 'home#select_org'
end
