require 'sinatra'
configure { set :server, :puma }


get '/' do
  erb :index
end
