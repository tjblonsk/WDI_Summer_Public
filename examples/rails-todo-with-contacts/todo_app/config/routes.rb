TodoApp::Application.routes.draw do
  root :to => 'welcome#index'
  get '/todos/search' => 'todos#search', as: 'todos_search'
  resources :todos
  resources :contacts
  post '/todos/:id/add_contact' => 'todos#add_contact', as: 'add_todo_contact'
  post '/todos/:id/remove_contact' => 'todos#remove_contact', as: 'remove_todo_contact'
  get '/corporate_about' => 'welcome#about', as: 'aboot'
  # get '/todos' => 'todos#index', as: 'dogs'
  # post '/todos' => 'todos#create'
  # get '/todos/new' => 'todos#new'
  # get '/todos/:id' => 'todos#show'
  # get '/todos/:id/edit' => 'todos#edit'
  # put '/todos/:id' => 'todos#update'
  # delete '/todos/:id' => 'todos#destroy'
  # get '/contacts' => 'contacts#index'
  # post '/contacts' => 'contacts#create'
  # get '/contacts/new' => 'contacts#new'
  # get '/contacts/:id' => 'contacts#show'
  # get '/contacts/:id/edit' => 'contacts#edit'
  # put '/contacts/:id' => 'contacts#update'
  # delete '/contacts/:id' => 'contacts#destroy'

end
