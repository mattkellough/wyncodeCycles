require 'sinatra'
configure { set :server, :puma }



get "/views/:file" do
  file = params[:file] + "index.html"
  if File.exists?(params[:file])
    return File.open("views/" + file)
  else
   return "error"
  end
end
