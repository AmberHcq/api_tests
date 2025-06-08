# **🚀 The Ultimate Data Intelligence Toolkit 🚀**

Welcome to a powerful trio of data tools, designed to give you a comprehensive view of the digital world. This project isn't just a collection of scripts; it's a launchpad for deep analysis, combining blockchain data, social media trends, and cutting-edge AI.

Whether you're a crypto researcher, a market analyst, or a developer, this toolkit gives you the power to connect dots that others can't see.

## **✨ What's Inside?**

This repository contains a suite of powerful API testing scripts that bring together three key data sources:

* **🔮 Dune Analytics (dune\_test.js)**: Tap into the heart of the blockchain. Execute queries on on-chain data to uncover trends in DeFi, NFTs, and more.  
* **🤖 Grok AI (grok\_test.js)**: Go beyond the numbers with a powerful AI. Ask questions, get summaries, and interact with your data in a conversational way.  
* **🐦 Twitter API (search\_all.js & search\_recent.js)**: Keep your finger on the pulse of public conversation. Search the entire Twitter archive or just the last seven days to track sentiment, find breaking news, and understand what the world is thinking.

## **💡 The Magic is in the Mix**

The real power of this project comes from combining these tools. Imagine the possibilities:

* **Identify a spike in a token's on-chain activity with Dune**, then use the **Twitter API** to see what the community is saying about it in real-time.  
* **Feed complex blockchain data from Dune and social sentiment from Twitter into Grok AI**, and ask it to generate a simple, easy-to-understand summary.  
* **Track the social media impact of a major protocol update** by correlating on-chain transaction data with public conversations.

This is more than just data collection; it's about creating actionable intelligence.

## **🛠️ Getting Started**

Ready to dive in? Here's how to get up and running.

### 1\. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2\. Installation

Clone the repository and install the necessary dependencies:

git clone \<your-repo-url\>  
cd \<your-repo-name\>  
npm install

### 3\. Set Up Your API Keys

You'll need API keys for Dune, Twitter, and X AI (for Grok). Create a .env file in the root of the project and add your keys like this:

DUNE\_API\_KEY="YOUR\_DUNE\_API\_KEY"  
BEARER\_TOKEN="YOUR\_TWITTER\_BEARER\_TOKEN"  
\# Note: The Grok API key is currently hard-coded in grok\_test.js  
\# For better security, you should also manage it as an environment variable.

### 4\. Run the Scripts

You can run each script individually using Node.js:

\# Get the latest results from a Dune query  
node dune\_test.js

\# Ask Grok a question  
node grok\_test.js

\# Search for recent tweets  
node search\_recent.js

## **🔭 Future Vision**

This toolkit is just the beginning. The architecture is designed for expansion. Future possibilities include:

* **Automated Workflows**: Create scripts that automatically trigger Dune queries based on keywords found on Twitter.  
* **Integrated Dashboards**: Build a front-end interface to visualize the combined data in one place.  
* **New Data Sources**: Add more APIs to enrich the analysis (e.g., GitHub for developer activity, news APIs for media coverage).

We are building a 360-degree view of the digital asset ecosystem.

We hope you find this toolkit as powerful and exciting as we do. Happy exploring\!