class UsersController < ApplicationController
  def edit
    
  end

  def index
    @users = User.all
    respond_to do |format|
      format.html {redirect_to root_path}
      format.json {}
    end
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
