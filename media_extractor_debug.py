import re
import glob
import os

# Find all optimized lesson files
lesson_files = glob.glob(r"C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints\src\data\optimized-lesson*.ts")
print(f"Found {len(lesson_files)} lesson files")

if not lesson_files:
    print("No lesson files found!")
    exit()

lesson_files.sort()

# Media data collection
media_data = []

# Check if files exist in public folders
def check_file_exists(media_path):
    """Check if media file exists in public folders"""
    folders_to_check = [
        r"C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints\public\lessonimages",
        r"C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints\public\lessonaudio",
        r"C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints\public\lessonvideos",
        r"C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints\public\lesson-media"
    ]
    
    filename = os.path.basename(media_path)
    
    for folder in folders_to_check:
        if os.path.exists(folder):
            full_path = os.path.join(folder, filename)
            if os.path.exists(full_path):
                return "✅ Present"
    
    return "❌ Required"

def extract_title_from_filename(filename):
    """Convert filename to readable title"""
    title = os.path.splitext(filename)[0]
    title = title.replace('-', ' ').replace('_', ' ')
    title = ' '.join(word.capitalize() for word in title.split())
    return title

# Process each lesson file
for i, file_path in enumerate(lesson_files, 1):
    lesson_number = f"Lesson {i}"
    print(f"Processing {lesson_number}: {os.path.basename(file_path)}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Extract all media URLs
            image_matches = re.findall(r"imageUrl:\s*['\"]([^'\"]+)['\"]", content)
            audio_matches = re.findall(r"audioUrl:\s*['\"]([^'\"]+)['\"]", content)
            video_matches = re.findall(r"videoUrl:\s*['\"]([^'\"]+)['\"]", content)
            
            print(f"  Images: {len(image_matches)}, Audio: {len(audio_matches)}, Videos: {len(video_matches)}")
            
            # Process images
            for match in image_matches:
                if match and not match.startswith('data:'):
                    filename = os.path.basename(match)
                    if filename:
                        title = extract_title_from_filename(filename)
                        status = check_file_exists(match)
                        media_data.append([lesson_number, filename, title, status])
            
            # Process audio
            for match in audio_matches:
                if match and not match.startswith('data:'):
                    filename = os.path.basename(match)
                    if filename:
                        title = extract_title_from_filename(filename)
                        status = check_file_exists(match)
                        media_data.append([lesson_number, filename, title, status])
            
            # Process videos
            for match in video_matches:
                if match and not match.startswith('data:') and not match.startswith('http'):
                    filename = os.path.basename(match)
                    if filename:
                        title = extract_title_from_filename(filename)
                        status = check_file_exists(match)
                        media_data.append([lesson_number, filename, title, status])
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

print(f"\nTotal media entries found: {len(media_data)}")

# Create CSV
csv_lines = ["Lesson Number,Media Filename,Media Description,Status"]

# Sort data
media_data.sort(key=lambda x: (int(x[0].split()[1]) if x[0].split()[1].isdigit() else 999, x[1]))

for row in media_data:
    escaped_row = [str(field).replace('"', '""') for field in row]
    csv_lines.append(f'"{escaped_row[0]}","{escaped_row[1]}","{escaped_row[2]}","{escaped_row[3]}"')

# Write CSV
output_file = r"C:\Users\rajka\Desktop\My App\ecgkid-pulsepoints\LESSON_MEDIA_INVENTORY.csv"
try:
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        f.write('\n'.join(csv_lines))
    print(f"✅ CSV file created: {output_file}")
except Exception as e:
    print(f"❌ Error writing CSV: {e}")

# Summary
present_count = sum(1 for row in media_data if "Present" in row[3])
required_count = sum(1 for row in media_data if "Required" in row[3])

print(f"\n📊 Summary:")
print(f"Files present: {present_count}")
print(f"Files required: {required_count}")
print(f"Total lessons processed: {len(lesson_files)}")
print(f"Total media files: {len(media_data)}")
