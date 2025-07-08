"use client";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Swift Language Guide",
    description:
      "Comprehensive guide to Apple’s Swift programming language covering syntax, language features, and programming paradigms.",
    link: "https://developer.apple.com/documentation/swift",
  },
  {
    title: "UIKit Documentation",
    description:
      "Learn how to build iOS apps using UIKit—Apple’s foundational framework for user interface design and interaction on iOS.",
    link: "https://developer.apple.com/documentation/uikit",
  },
  {
    title: "SwiftUI Documentation",
    description:
      "Discover Apple’s modern UI framework for declarative UI development across all Apple platforms.",
    link: "https://developer.apple.com/documentation/swiftui",
  },
  {
    title: "Xcode Documentation",
    description:
      "Explore Apple’s IDE for building apps. Learn about project setup, interface builder, debugging, and simulator tools.",
    link: "https://developer.apple.com/documentation/xcode",
  },
  {
    title: "Human Interface Guidelines (HIG)",
    description:
      "Learn best practices for designing intuitive, beautiful, and consistent user experiences on Apple platforms.",
    link: "https://developer.apple.com/design/human-interface-guidelines",
  },
  {
    title: "Building a Great App with SwiftUI",
    description:
      "A WWDC session by Apple that walks through designing an app from scratch using SwiftUI, covering architecture, state management, performance, and user experience best practices.",
    link: "https://developer.apple.com/videos/play/wwdc2020/10040/",
  },
];
