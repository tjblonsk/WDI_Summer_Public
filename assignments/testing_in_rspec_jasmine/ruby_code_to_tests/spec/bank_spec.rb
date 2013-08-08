require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
<<<<<<< HEAD
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
=======
	let(:bank) {Bank.new("Goldman Sucks")}

	describe ".new" do
		it "creates a bank object" do
			expect(bank).to_not eq(nil)
		end

		it "has no accounts when created" do
			expect(bank.accounts.count).to eq(0)
		end
	end

	describe "#create_account" do
		it "adds an account" do
			bank.create_account("Anthony Weiner", 0)
			expect(bank.accounts.count).to eq(1)
		end

		it "saves the initialized value" do
			bank.create_account("Anthony Weiner", 100)
			expect(bank.accounts["Anthony Weiner"]).to eq(100)
		end
	end

	describe "#deposit" do
		it "puts money in accounts" do
			bank.create_account("Person", 200)
			bank.deposit("Person", 300)
			expect(bank.accounts["Person"]).to eq(500)
		end
	end

	describe "#withdraw" do
		it "takes money out of an account" do
			bank.create_account("Person", 200)
			bank.withdraw("Person", 100)
			expect(bank.accounts["Person"]).to eq(100)
		end

		it "does not allow withdraw of too much money" do
			bank.create_account("Person", 200)
			bank.withdraw("Person", 300)
			expect(bank.accounts["Person"]).to eq(200)
		end

		it "does not allow withdraw of a negative amount" do
			bank.create_account("Person", 200)
			bank.withdraw("Person", -1000)
			expect(bank.accounts["Person"]).to eq(200)
		end

		it "does not allow withdraw from nonexistant accounts" do
			expect(bank.withdraw("anonymous", 100)).to eq(nil)
			expect(bank.accounts["anonymous"]).to eq(nil)
		end
	end

	describe "#balance" do
		it "returns the balance of an account" do
			bank.create_account("Person", 200)
			expect(bank.balance("Person")).to eq(200)
		end
	end
>>>>>>> c73c1a9bf3b4fc25cc81725478d021fc3619f337
end