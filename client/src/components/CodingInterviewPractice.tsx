"use client";

import { useState } from "react";

interface QA {
  question: string;
  answer: string;
}

const questions: QA[] = [
  { 
    question: "On a 3x3 grid, how many unique paths are there from top-left to bottom-right if you can only move right or down?", 
    answer: "6 unique paths (combinatorics: C(4,2) = 6)" 
  },
  { question: "Implement a function to reverse a linked list.", answer: "Iterate, reversing pointers, or use recursion." },
  { question: "Find the longest substring without repeating characters.", answer: "Use sliding window with a hash set or map, O(n)." },
  { question: "Implement binary search on a sorted array.", answer: "Repeatedly divide range in half, O(log n)." },
  { question: "Write a program to detect a cycle in a linked list.", answer: "Floyd’s cycle detection (slow/fast pointers)." },
  { question: "Find the maximum sum subarray (Kadane’s Algorithm).", answer: "Iterate while tracking max current and max global." },
  { question: "Implement merge sort.", answer: "Divide and conquer, recursively split and merge arrays." },
  { question: "Design a stack that supports push, pop, top, and retrieving the minimum element in O(1).", answer: "Use an auxiliary stack to track min values." },
  { question: "Find the intersection of two arrays.", answer: "Use hash sets or sorting + two pointers." },
  { question: "Implement LRU Cache.", answer: "Use doubly linked list + hashmap for O(1) operations." },

  // Logical reasoning
  { question: "You have 8 balls, one is heavier. Using a balance scale, what is the minimum weighings needed to find it?", answer: "2 weighings (divide into 3 groups)." },
  { question: "Why are hash tables expected O(1) for lookup but in worst case O(n)?", answer: "Because collisions can degrade to linked list scans." },
  { question: "Explain why quicksort is faster in practice than merge sort even if both are O(n log n).", answer: "Better cache locality, fewer allocations." },
  { question: "How would you find the duplicate number in an array of n+1 integers where each integer is between 1 and n?", answer: "Floyd’s cycle detection on array values." },
  { question: "Explain why BFS is better than DFS for finding the shortest path in an unweighted graph.", answer: "BFS explores in levels, so the first time reaching target is shortest." },
  { question: "How would you design an elevator system for a 100-floor building?", answer: "Use scheduling algorithms like SCAN/LOOK to optimize stops." },
  { question: "What’s the difference between concurrency and parallelism?", answer: "Concurrency = multiple tasks making progress, Parallelism = tasks actually running simultaneously." },
  { question: "If you roll two dice, what is the probability the sum is 8?", answer: "5/36." },
];

export default function CodingInterviewPractice() {
  const [current, setCurrent] = useState<QA>(
    questions[Math.floor(Math.random() * questions.length)]
  );
  const [answer, setAnswer] = useState("");
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = () => {
    if (answer.trim().toLowerCase().includes(current.answer.toLowerCase().split(" ")[0])) {
      setFeedback("✅ Correct! Great job.");
      setStreak((s) => s + 1);
    } else {
      setFeedback(`❌ Wrong. Correct answer: ${current.answer}`);
      setStreak(0);
    }

    setTimeout(() => {
      setAnswer("");
      setFeedback(null);
      setCurrent(questions[Math.floor(Math.random() * questions.length)]);
    }, 3000);
  };

  return (
    <div
  className="
    bg-[rgba(10,25,47,0.7)]
    backdrop-blur-lg 
    border border-[rgba(255,255,255,0.15)]
    rounded-2xl shadow-xl 
    p-4 
    flex flex-col
    transition-all duration-700
    w-[100%] max-w-[550px] h-[250px]      
    sm:max-h-[350px]   /* Increased for mobile */
    md:max-h-[500px]   /* Increased for tablet */
  "
>
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base sm:text-lg font-bold text-blue-300 tracking-wide">
          🎯 Coding Interview Practice
        </h2>
        <span className="bg-[rgba(255,255,255,0.1)] px-3 py-1 rounded-full text-white text-xs">
          Streak: {streak} 🔥
        </span>
      </div>

      {/* Scrollable Question + Feedback */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent pr-1">
        <p className="text-white bg-[rgba(255,255,255,0.05)] p-2 rounded-lg mb-2 text-sm leading-relaxed">
          {current.question}
        </p>
        {feedback && (
          <div className="text-xs text-white bg-[rgba(255,255,255,0.1)] p-2 rounded-lg">
            {feedback}
          </div>
        )}
      </div>

      {/* Answer Input */}
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your reasoning..."
        className="bg-[rgba(255,255,255,0.08)] text-white p-2 rounded mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-3 py-2 text-sm rounded-lg shadow transition-all"
      >
        Submit
      </button>
    </div>
  );
}
