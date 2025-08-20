import React, { useState } from "react";
import Layout from "@/components/Layout";
import ProjectsGrid from "@/components/ProjectsGrid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Github, ExternalLink, Star } from "lucide-react";

type Question = {
  id: number;
  language: string;
  type: "debug" | "output" | "logic";
  question: string;
  code?: string;
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    id: 1,
    language: "C",
    type: "output",
    question: "What will be the output of the following program?",
    code: `
#include <stdio.h>
int main() {
    int a = 5;
    int b = a++ + ++a;
    printf("%d", b);
    return 0;
}
    `,
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    id: 2,
    language: "Python",
    type: "debug",
    question: "Fix the error in the code below to make it print the sum of the list.",
    code: `
nums = [1, 2, 3, 4]
print(sum(nums))
    `,
    options: ["Correct as it is", "Remove []", "Replace sum with add", "Indentation error"],
    answer: "Correct as it is",
  },
  {
    id: 3,
    language: "Java",
    type: "logic",
    question: "Which option correctly reverses a string in Java?",
    options: [
      "str.reverse()",
      "new StringBuilder(str).reverse().toString()",
      "Collections.reverse(str)",
      "str[::-1]",
    ],
    answer: "new StringBuilder(str).reverse().toString()",
  },
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQ];

  const handleAnswer = () => {
    if (selected === question.answer) {
      setScore(score + 1);
    }
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected("");
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected("");
    setFinished(false);
  };

  return (
    <>
      <Layout>
        <div>
          {!finished ? (
        <div>
          <p className="text-lg font-semibold mb-2">
            Q{question.id}: {question.question}
          </p>
          {question.code && (
            <pre className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto text-sm">
              {question.code}
            </pre>
          )}
          <div className="space-y-2">
            {question.options.map((opt, i) => (
              <label
                key={i}
                className={`block p-2 border rounded-lg cursor-pointer ${
                  selected === opt
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  value={opt}
                  checked={selected === opt}
                  onChange={(e) => setSelected(e.target.value)}
                  className="hidden"
                />
                {opt}
              </label>
            ))}
          </div>
          <button
            onClick={handleAnswer}
            disabled={!selected}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
          >
            {currentQ + 1 === questions.length ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
          <p className="mb-4">
            Your Score: <span className="font-bold">{score}</span> /{" "}
            {questions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="bg-green-600 text-white py-2 px-6 rounded-lg"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
      </Layout>
    </>
  );
}
