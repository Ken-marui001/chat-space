require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save' do
      it "is valid with text, image, group and user" do
        expect(build(:message)).to be_valid
      end
      it "is valid with text, group and user" do
        expect(build(:message, image: nil)).to be_valid
      end
      it "is valid with image, group and user" do
        expect(build(:message, text: nil)).to be_valid
      end
    end
    context 'cannot save' do
      it "is invalid without text and image" do
        message = build(:message, text: nil, image: nil)
        message.valid?
        expect(message.errors[:text]).to include('を入力してください')
      end
      it "is invalid without group_id" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include('を入力してください')
      end
      it "is invalid without group_id" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include('を入力してください')
      end
    end
  end
end