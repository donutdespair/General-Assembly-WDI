
    get "/add/:num1/:num2" do
  ans = params[:num1].to_i + params[:num2].to_i
      #@ can be passed to view
      # erb is embedded ruby file
      "Answer is #{ans}"
    end

    get "/subtract/:num1/:num2" do
  ans = params[:num1].to_i - params[:num2].to_i
      #@ can be passed to view
      # erb is embedded ruby file
      "Answer is #{ans}"
    end

    get "/divide/:num1/:num2" do
  ans = params[:num1].to_f / params[:num2].to_f
      #@ can be passed to view
      # erb is embedded ruby file
      "Answer is #{ans}"
    end

    get "/multiply/:num1/:num2" do
  ans = params[:num1].to_i * params[:num2].to_i
      #@ can be passed to view
      # erb is embedded ruby file
      "Answer is #{ans}"
    end
