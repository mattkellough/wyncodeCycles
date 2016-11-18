require 'sinatra'
configure { set :server, :puma }


get '/' do
  eb :index
end
