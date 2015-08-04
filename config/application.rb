require File.expand_path('../boot', __FILE__)

require 'rails'
require 'active_record/railtie'
require 'action_mailer/railtie'

Bundler.require(*Rails.groups)

module Todo
  class Application < Rails::Application
    config.middleware.delete Rack::Sendfile
    config.middleware.delete Rack::MethodOverride
    config.middleware.delete ActionDispatch::Cookies
    config.middleware.delete ActionDispatch::Session::CookieStore
    config.middleware.delete ActionDispatch::Flash

    config.active_record.raise_in_transactional_callbacks = true
  end
end
