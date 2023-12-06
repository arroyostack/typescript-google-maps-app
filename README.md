# TypeScript Map Application

[![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)](https://www.typescriptlang.org/)

## Overview

This project is an in-depth tutorial where I have built a TypeScript-based map application. The application enables you to randomly create and manage instances of users, companies, and custom maps with markers.

## Key Features

### 1. API Surface Restriction

The primary emphasis has been on creating a clean and secure codebase by carefully restricting the API surface area. This ensures that other engineers interacting with the code can only perform specific actions explicitly allowed within the application, contributing to better code maintainability.

### 2. Interface-based Dependency

TypeScript interfaces: we've established a flexible and maintainable dependency structure between classes. This approach enhances code reuse and reduces coupling between different parts of the application. By allowing other classes to implement specific interfaces, we promote a modular and extensible architecture.

### 3. Error Localization with `implements`

To ensure TypeScript catches errors in the right place, we've employed the `implements` clause when working with interfaces. This optional step not only clarifies the intentions of each class but also assists TypeScript in performing thorough type checking. This practice contributes to a more robust and reliable codebase.

## Getting Started

### Prerequisites

- Ensure you have TypeScript installed in your development environment.
- Use Typescript compiler of choice.

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/typescript-map-application.git
   ```
