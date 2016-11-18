require 'sinatra'
configure { set :server, :puma }

class WyncodeCyclesApp < Sinatra::Base
  set :public, 'public'
  
  get '/' do
    erb :index
  end
end
