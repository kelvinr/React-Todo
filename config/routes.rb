Rails.application.routes.draw do
  root 'todo_lists#index'

  class FormatTest
    attr_accessor :mime_type

    def initialize(format)
      @mime_type = Mime::Type.lookup_by_extension(format)
    end

    def matches?(request)
      request.format == mime_type
    end
  end

  resources :todo_lists, except: [:new, :edit] do
    resources :todo_items
  end

  get '*all', :to => 'todo_lists#index', :constraints => FormatTest.new(:html)
end
