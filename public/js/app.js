async function generateKeywords() {
    const seedKeyword = document.getElementById('seedKeyword').value.trim();
    if (!seedKeyword) {
        alert('Please enter a seed keyword');
        return;
    }

    const resultsDiv = document.getElementById('results');
    const keywordGrid = document.getElementById('keywordGrid');
    const resultsStats = document.getElementById('resultsStats');
    
    // Show loading
    resultsDiv.style.display = 'block';
    keywordGrid.innerHTML = '<div class=\"loading\">🔄 Analyzing keyword opportunities...</div>';

    try {
        console.log('Making API request to /api/keywords');
        
        const response = await fetch('/api/keywords', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ seedKeyword })
        });

        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Response data:', data);

        if (data.success) {
            displayKeywords(data.keywords, data.metadata);
            resultsStats.textContent = data.totalResults + ' keywords • ' + data.metadata.processingTime;
        } else {
            keywordGrid.innerHTML = '<div class=\"error\">❌ Error: ' + data.message + '</div>';
        }
    } catch (error) {
        console.error('Fetch error:', error);
        keywordGrid.innerHTML = '<div class=\"error\">❌ Error: ' + error.message + '</div>';
    }
}

function displayKeywords(keywords, metadata) {
    const keywordGrid = document.getElementById('keywordGrid');
    
    let html = '';
    
    keywords.forEach((keyword, index) => {
        const scoreColor = keyword.score > 70 ? '#4caf50' : keyword.score > 40 ? '#ff9800' : '#f44336';
        
        html += '<div class=\"keyword-card\">';
        html += '<div class=\"keyword-title\">' + (index + 1) + '. ' + keyword.keyword + '</div>';
        html += '<div class=\"keyword-metrics\">';
        html += '<span>📊 Volume: ' + keyword.searchVolume.toLocaleString() + '</span>';
        html += '<span class=\"keyword-score\" style=\"background: ' + scoreColor + '\">Score: ' + keyword.score + '</span>';
        html += '</div>';
        html += '<div class=\"keyword-metrics\">';
        html += '<span>🏆 Competition: ' + keyword.competition + '%</span>';
        html += '<span>💎 Difficulty: ' + keyword.difficulty + '%</span>';
        html += '</div>';
        html += '<div class=\"keyword-metrics\">';
        html += '<span>💰 CPC: $' + keyword.cpc + '</span>';
        html += '<span>📈 Rank: #' + keyword.rank + '</span>';
        html += '</div>';
        html += '</div>';
    });
    
    keywordGrid.innerHTML = html;
}

// Auto-generate on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('seedKeyword');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateKeywords();
            }
        });
    }
});
