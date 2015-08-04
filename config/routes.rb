Rails.application.routes.draw do
  class FormatTest
    attr_accessor :mime_type

    def initialize(format)
      @mime_type = Mime::Type.lookup_by_extension(format)
    end

    def matches?(request)
      request.format == mime_type
    end
  end

  get '*all', to: 'api#index', constraints: FormatTest.new(:html)
  resources :todo_lists, except: [:new, :edit] do
    resources :todo_items, only: [:create, :update, :destroy]
  end
end
