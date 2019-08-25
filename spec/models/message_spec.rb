require 'rails_helper'
describe Message do
  describe '#create' do
    describe 'can save' do
      it "is valid with text, imag, group and user" do

      end
      it "is valid with text, group and user" do

      end
      it "is valid with imag, group and user" do

      end
    end
    describe 'cannot save' do
      it "is invalid without text and image" do

      end
      it "is invalid without group_id" do

      end
      it "is invalid without group_id" do

      end
    end
  end
end