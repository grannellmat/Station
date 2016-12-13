module FrontEndModules::Cards

  def card(options={}, &block)
    options = {
      class: '',        ## Any additional classes
      variant: 'white', ## Color variant of the card

      # Js State Controller
      js: false,           ## JS Enabled card
      js_state: false,     ## State on load
      js_controller: false ## What controls the state of the card
    }.merge(options)

    card_class = " o-box o-lockable"
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
