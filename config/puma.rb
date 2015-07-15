workers 4
threads_count = 1
threads threads_count, threads_count

preload_app!

rackup DefaultRackup
port ENV['PORT'] || 3000
environment ENV["RAILS_ENV"] || 'development'

on_worker_boot do
  ActiveRecord::Base.establish_connection
end
