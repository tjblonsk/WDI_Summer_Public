require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) {Bank.new('Wells Fargo')}

describe ".new" do
  it "creates a Bank object" do
    expect(bank).to_not eq nil
  end
  it "has no accounts" do
    expect(bank.accounts.count).to eq 0
  end
end


  describe "#name" do
    it "has a name" do
      expect(bank.name).to eq 'Wells Fargo'
    end
  end

  describe "create an account" do
    it "create adds an account" do
      bank.create_account('Jim', 100)
      expect(bank.accounts['Jim']).to eq 100
      expect(bank.accounts.count).to eq 1
    end
  end

  describe "deposit" do
    it "increases the account by the deposit amount" do
      bank.create_account('Jim', 100)
      bank.deposit('Jim', 50)
      expect(bank.accounts['Jim']).to eq 150
    end
  end

  describe "withdraw" do
    it "decreases the account by the withdraw amount" do
      bank.create_account('Jim', 100)
      bank.withdraw('Jim', 50)
      expect(bank.accounts['Jim']).to eq 50
    end
  end

  describe "balance" do
    it "returns the account balance" do
      bank.create_account('Jim', 100)
      expect(bank.balance('Jim')).to eq 100
    end
  end
end