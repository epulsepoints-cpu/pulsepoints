#!/usr/bin/env python3
"""
Quick Setup Script for PTB-XL ECG Processing
===========================================

This script sets up the environment and runs the ECG processing pipeline.
"""

import subprocess
import sys
import os

def install_requirements():
    """Install Python requirements"""
    print("📦 Installing Python requirements...")
    try:
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', '-r', 'requirements.txt'])
        print("✅ Requirements installed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install requirements: {e}")
        return False

def check_python_version():
    """Check if Python version is compatible"""
    version = sys.version_info
    if version.major == 3 and version.minor >= 8:
        print(f"✅ Python {version.major}.{version.minor}.{version.micro} is compatible")
        return True
    else:
        print(f"❌ Python {version.major}.{version.minor}.{version.micro} is not compatible. Need Python 3.8+")
        return False

def run_processor():
    """Run the ECG processor"""
    print("🚀 Starting ECG processing...")
    try:
        from ptbxl_ecg_processor import PTBXLECGProcessor
        
        processor = PTBXLECGProcessor(
            base_dir="ptbxl_data",
            output_dir="public/ecg/ptbxl_12lead"
        )
        
        success = processor.run()
        
        if success:
            print("\n🎉 ECG processing completed successfully!")
            print("\nGenerated files:")
            print("📁 public/ecg/ptbxl_12lead/ - ECG images")
            print("📋 public/ecg/ptbxl_12lead/ptbxl_metadata.json - ECG metadata")
            print("❓ public/ecg/ptbxl_12lead/ptbxl_quiz_questions.json - Quiz questions")
            
            return True
        else:
            print("❌ ECG processing failed")
            return False
            
    except Exception as e:
        print(f"❌ Error running processor: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """Main setup function"""
    print("PTB-XL ECG Database Setup")
    print("=" * 25)
    print()
    
    # Check Python version
    if not check_python_version():
        return 1
    
    # Install requirements
    if not install_requirements():
        print("\n❌ Setup failed. Please install requirements manually:")
        print("pip install -r requirements.txt")
        return 1
    
    print("\n" + "=" * 50)
    
    # Run processor
    if not run_processor():
        return 1
    
    print("\n✅ Setup and processing complete!")
    print("\nTo integrate with your React app:")
    print("1. The ECG images are ready in public/ecg/ptbxl_12lead/")
    print("2. Update your quiz system to use ptbxl_quiz_questions.json")
    print("3. Use ptbxl_metadata.json for ECG information in your app")
    
    return 0

if __name__ == "__main__":
    exit(main())