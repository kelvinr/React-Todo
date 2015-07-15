class ApiController < ActionController::Metal
  include AbstractController::Callbacks
  include ActionController::RackDelegation
  include ActionController::StrongParameters

  before_action :authenticate_request, only: [:current_user]

  def index
    render file: 'public/index.html'
  end

  private

  def render(options={})
    if options[:file]
      body = File.read(options[:file])
      self.content_type = "text/html"
    else
      body = Oj.dump(options[:json], mode: :compat)
      self.content_type = 'application/json'
      self.headers['Content-Length'] = body.bytesize.to_s
    end
    self.response_body = body
    self.status = options[:status] || 200
  end

  def redirect_to(options={})
    self.location = options[:location] || ENV['ORIGIN']
    self.status = options[:status] || 302
  end
end
