AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController

  get '/' => 'tasks#index', as: :index

  post '/create', to: 'tasks#create'

  put '/complete/:id', to: 'tasks#complete'

  delete '/destroy/:id', to: 'tasks#destroy'



end
