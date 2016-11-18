require 'sinatra'
configure { set :server, :puma }

class WyncodeCyclesApp < Sinatra::Base
  get '/' do
    erb :index
  end
end
