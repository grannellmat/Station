module FrontEndModules::Cards

  def card(options={}, &block)
    options = {
      class: '',
      variant: 'white',

      # Js State Controller
      js: false,
      js_state: false,
      js_controller: false

    }.merge(options)

    card_class = " o-box"
    card_class << " u-bg--#{options[:variant]}"

    if options[:js]
      card_class << " js-state-controller #{options[:js_state]}"
      card_data = {state: options[:js_state], state_controller: options[:js_controller]}
    else
      card_data = {}
    end

    content_tag(:article, class: card_class, data: card_data) do
      capture(&block)
    end
  end
end
