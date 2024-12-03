class ApplicationSerializer
  include Alba::Resource

  class << self
    def one(name, condition = nil, serializer: nil, **options)
      options[:resource] ||= serializer || proc { |_obj| "#{name}Serializer".classify.constantize }
      super(name, condition, **options)
    end

    def many(name, condition = nil, serializer: nil, **options)
      options[:resource] ||= serializer || proc { |_obj| "#{name.to_s.singularize}Serializer".classify.constantize }
      super(name, condition, **options)
    end
  end
end